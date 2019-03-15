from tempfile import NamedTemporaryFile
from libxmp.consts import XMP_NS_CC, XMP_NS_XMP_Rights
import libxmp
import io

"""
Tools for embedding Creative Commons Rights Expression Language (ccREL) data
into files using Extensible Media Platform (XMP).

This implementation is specifically for embedding ccREL inside of images, but it
could be extended to handle other types of content.

For more information, see the ccREL W3 standard [0].
[0] https://www.w3.org/Submission/ccREL/
"""


def embed_xmp_bytes(image: io.BytesIO, work_properties):
    """
    Given a file-like `io.BytesIO` object, embed ccREL metadata inside of it.
    For our purposes, we assume that the file is an image.

    :param image: A BytesIO representation of an image.
    :param work_properties: A dictionary with keys 'license_url' and
    'attribution'. 'creator', and 'work_landing_page' are optional (but highly
    recommended)
    :return: An `io.BytesIO` object containing XMP metadata.
    """

    # libxmp only works with actual file locations on the disk. To work around
    # this limitation, rather than embedding the metadata directly into the
    # `io.BytesIO` object, we have to use a temporary file and then convert it
    # back.
    # https://github.com/python-xmp-toolkit/python-xmp-toolkit/issues/46
    with NamedTemporaryFile() as xmp_temp:
        xmp_temp.write(image.getvalue())
        xmpfile = libxmp.XMPFiles(file_path=xmp_temp.name, open_forupdate=True)

        # Set CC rights.
        xmp = xmpfile.get_xmp()
        xmp.register_namespace(XMP_NS_CC, 'cc')
        xmp.set_property(XMP_NS_CC, 'license', work_properties['license_url'])
        if 'creator' in work_properties:
            xmp.set_property(
                XMP_NS_CC, 'attributionName', work_properties['creator']
            )
        if 'work_landing_page' in work_properties:
            xmp.set_property(
                XMP_NS_CC,
                'attributionURL',
                work_properties['work_landing_page']
            )
        # Set generic XMP rights.
        xmp.register_namespace(XMP_NS_XMP_Rights, 'xmpRights')
        xmp.set_property_bool(XMP_NS_XMP_Rights, 'Marked', True)
        usage = work_properties['attribution']
        xmp.set_property(XMP_NS_XMP_Rights, 'UsageTerms', usage)

        # Serialize back to io.BytesIO.
        xmpfile.put_xmp(xmp)
        xmpfile.close_file()
        xmp_temp.seek(0)
        return io.BytesIO(xmp_temp.read())
