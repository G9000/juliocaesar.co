import { buildImageUrl } from "cloudinary-build-url";
// import { STORAGE_TYPES, RESIZE_TYPES, Gravity } from "@cld-apis/utils";

// check if local or from the cloud
const isUrl = (param: string) =>
    param.match(
        /^(ht|f)tps?:\/\/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|\\^[\]`]+)?$/,
    );

function decideStorageDefault(param: string) {
    if (isUrl(param)) {
        return "fetch";
    } else {
        return "upload";
    }
}

export const Image = ({
    src,
    cloudName,
    publicId,
    transformations,
    width,
    height,
    layout,
    storageType,
    alt,
    ...rest
}) => {
    const cloudinaryUrl =
        cloudName &&
        buildImageUrl(publicId, {
            cloud: {
                cloudName,
                storageType: storageType
                    ? storageType
                    : decideStorageDefault(publicId),
            },
            transformations: {
                resize: {
                    width: layout ? null : width,
                    height: layout ? null : height,
                },
                ...transformations,
            },
        });
    return (
        // Add blurred placeholder
        <img
            src={cloudName ? cloudinaryUrl : src}
            width={layout ? null : width}
            height={layout ? null : height}
            alt={alt}
            {...rest}
        />
    );
};
