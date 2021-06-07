import {
  createClient,
  createCurrentUserHook,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";

const client = {
  projectId: "p2vl2ynd",
  dataset: "production",
  apiVersions: "2021-03-25",
  useCdn: false,
};

export const sanityClient = createClient(client);
export const usePreviewSubscripton = createPreviewSubscriptionHook(client);
export const urlFor = (source) => createImageUrlBuilder(client).image(source);
export const PortableText = createPortableTextComponent({
  ...client,
  serializers: {},
});
