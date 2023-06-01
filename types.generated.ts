// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Slice zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    body: prismic.SliceZone<HomepageDocumentDataBodySlice>;
}
/**
 * Primary content in Homepage → Slice zone → `homepage_project` → Primary
 *
 */
interface HomepageDocumentDataBodyHomepageProjectSlicePrimary {
    /**
     * Title field in *Homepage → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_project.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismic.RichTextField;
    /**
     * Capabilities field in *Homepage → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_project.primary.capabilities
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    capabilities: prismic.RichTextField;
    /**
     * description field in *Homepage → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_project.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismic.RichTextField;
    /**
     * cta field in *Homepage → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_project.primary.cta
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta: prismic.RichTextField;
    /**
     * Background Image field in *Homepage → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_project.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismic.ImageField<never>;
}
/**
 * Item in Homepage → Slice zone → `homepage_project` → Items
 *
 */
export interface HomepageDocumentDataBodyHomepageProjectSliceItem {
    /**
     * Slide field in *Homepage → Slice zone → `homepage_project` → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_project.items[].slide
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    slide: prismic.ImageField<never>;
    /**
     * Tags field in *Homepage → Slice zone → `homepage_project` → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Separated by commas (e.g "A, B, C")
     * - **API ID Path**: homepage.body[].homepage_project.items[].tags
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    tags: prismic.KeyTextField;
}
export type HomepageDocumentDataBodyHomepageProjectSlice = prismic.Slice<"homepage_project", Simplify<HomepageDocumentDataBodyHomepageProjectSlicePrimary>, Simplify<HomepageDocumentDataBodyHomepageProjectSliceItem>>;
/**
 * Primary content in Homepage → Slice zone → `homepage_hero` → Primary
 *
 */
interface HomepageDocumentDataBodyHomepageHeroSlicePrimary {
    /**
     * hero-footer-left-1 field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary."hero-footer-left-1"
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    "hero-footer-left-1": prismic.TitleField;
    /**
     * hero-footer-left-2 field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary."hero-footer-left-2"
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    "hero-footer-left-2": prismic.TitleField;
    /**
     * hero-footer-left-3 field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary."hero-footer-left-3"
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    "hero-footer-left-3": prismic.TitleField;
    /**
     * hero-footer-center-1 field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary."hero-footer-center-1"
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    "hero-footer-center-1": prismic.TitleField;
    /**
     * hero-footer-center-2 field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary."hero-footer-center-2"
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    "hero-footer-center-2": prismic.TitleField;
    /**
     * hero-footer-center-3 field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary."hero-footer-center-3"
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    "hero-footer-center-3": prismic.TitleField;
    /**
     * hero-footer-right-1 field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary."hero-footer-right-1"
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    "hero-footer-right-1": prismic.TitleField;
    /**
     * hero-footer-right-mobile field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary."hero-footer-right-mobile"
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    "hero-footer-right-mobile": prismic.TitleField;
    /**
     * Hero texture Image field in *Homepage → Slice zone → `homepage_hero` → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_hero.primary.hero_texture_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_texture_image: prismic.ImageField<never>;
}
export type HomepageDocumentDataBodyHomepageHeroSlice = prismic.Slice<"homepage_hero", Simplify<HomepageDocumentDataBodyHomepageHeroSlicePrimary>, never>;
/**
 * Primary content in Homepage → Slice zone → `table` → Primary
 *
 */
interface HomepageDocumentDataBodyTableSlicePrimary {
    /**
     * Title field in *Homepage → Slice zone → `table` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].table.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismic.TitleField;
}
/**
 * Item in Homepage → Slice zone → `table` → Items
 *
 */
export interface HomepageDocumentDataBodyTableSliceItem {
    /**
     * title field in *Homepage → Slice zone → `table` → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].table.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismic.TitleField;
    /**
     * number field in *Homepage → Slice zone → `table` → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].table.items[].number
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    number: prismic.TitleField;
    /**
     * Description field in *Homepage → Slice zone → `table` → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].table.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismic.RichTextField;
    /**
     * rows field in *Homepage → Slice zone → `table` → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Sepparated with commas e.g "Creative Direction, Research, Discovery"
     * - **API ID Path**: homepage.body[].table.items[].rows
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    rows: prismic.RichTextField;
}
export type HomepageDocumentDataBodyTableSlice = prismic.Slice<"table", Simplify<HomepageDocumentDataBodyTableSlicePrimary>, Simplify<HomepageDocumentDataBodyTableSliceItem>>;
/**
 * Primary content in Homepage → Slice zone → `homepage_portfolio_slice` → Primary
 *
 */
interface HomepageDocumentDataBodyHomepagePortfolioSliceSlicePrimary {
    /**
     * TITLE field in *Homepage → Slice zone → `homepage_portfolio_slice` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_portfolio_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismic.TitleField;
    /**
     * Description field in *Homepage → Slice zone → `homepage_portfolio_slice` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_portfolio_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismic.RichTextField;
    /**
     * tags field in *Homepage → Slice zone → `homepage_portfolio_slice` → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_portfolio_slice.primary.tags
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    tags: prismic.KeyTextField;
}
/**
 * Item in Homepage → Slice zone → `homepage_portfolio_slice` → Items
 *
 */
export interface HomepageDocumentDataBodyHomepagePortfolioSliceSliceItem {
    /**
     * images field in *Homepage → Slice zone → `homepage_portfolio_slice` → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_portfolio_slice.items[].images
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    images: prismic.ImageField<never>;
}
export type HomepageDocumentDataBodyHomepagePortfolioSliceSlice = prismic.Slice<"homepage_portfolio_slice", Simplify<HomepageDocumentDataBodyHomepagePortfolioSliceSlicePrimary>, Simplify<HomepageDocumentDataBodyHomepagePortfolioSliceSliceItem>>;
/**
 * Primary content in Homepage → Slice zone → `homepage_portfolio_desktop` → Primary
 *
 */
interface HomepageDocumentDataBodyHomepagePortfolioDesktopSlicePrimary {
    /**
     * Available Tags field in *Homepage → Slice zone → `homepage_portfolio_desktop` → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Separated with commas (e.g "A, B, C, D")
     * - **API ID Path**: homepage.body[].homepage_portfolio_desktop.primary.available_tags
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    available_tags: prismic.KeyTextField;
}
/**
 * Item in Homepage → Slice zone → `homepage_portfolio_desktop` → Items
 *
 */
export interface HomepageDocumentDataBodyHomepagePortfolioDesktopSliceItem {
    /**
     * Image field in *Homepage → Slice zone → `homepage_portfolio_desktop` → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_portfolio_desktop.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismic.ImageField<never>;
    /**
     * tags field in *Homepage → Slice zone → `homepage_portfolio_desktop` → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.body[].homepage_portfolio_desktop.items[].tags
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    tags: prismic.KeyTextField;
}
export type HomepageDocumentDataBodyHomepagePortfolioDesktopSlice = prismic.Slice<"homepage_portfolio_desktop", Simplify<HomepageDocumentDataBodyHomepagePortfolioDesktopSlicePrimary>, Simplify<HomepageDocumentDataBodyHomepagePortfolioDesktopSliceItem>>;
/**
 * Slice for *Homepage → Slice zone*
 *
 */
type HomepageDocumentDataBodySlice = HomepageDocumentDataBodyHomepageProjectSlice | HomepageDocumentDataBodyHomepageHeroSlice | HomepageDocumentDataBodyTableSlice | HomepageDocumentDataBodyHomepagePortfolioSliceSlice | HomepageDocumentDataBodyHomepagePortfolioDesktopSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Homepage Portfolio documents */
interface HomepagePortfolioDocumentData {
    /**
     * Slice zone field in *Homepage Portfolio*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_portfolio.body[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    body: prismic.SliceZone<HomepagePortfolioDocumentDataBodySlice>;
}
/**
 * Primary content in Homepage Portfolio → Slice zone → `homepage_portfolio_slice` → Primary
 *
 */
interface HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSlicePrimary {
    /**
     * TITLE field in *Homepage Portfolio → Slice zone → `homepage_portfolio_slice` → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_portfolio.body[].homepage_portfolio_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismic.TitleField;
    /**
     * Description field in *Homepage Portfolio → Slice zone → `homepage_portfolio_slice` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_portfolio.body[].homepage_portfolio_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismic.RichTextField;
    /**
     * tags field in *Homepage Portfolio → Slice zone → `homepage_portfolio_slice` → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_portfolio.body[].homepage_portfolio_slice.primary.tags
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    tags: prismic.KeyTextField;
}
/**
 * Item in Homepage Portfolio → Slice zone → `homepage_portfolio_slice` → Items
 *
 */
export interface HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSliceItem {
    /**
     * images field in *Homepage Portfolio → Slice zone → `homepage_portfolio_slice` → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_portfolio.body[].homepage_portfolio_slice.items[].images
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    images: prismic.ImageField<never>;
}
export type HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSlice = prismic.Slice<"homepage_portfolio_slice", Simplify<HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSlicePrimary>, Simplify<HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSliceItem>>;
/**
 * Slice for *Homepage Portfolio → Slice zone*
 *
 */
type HomepagePortfolioDocumentDataBodySlice = HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSlice;
/**
 * Homepage Portfolio document from Prismic
 *
 * - **API ID**: `homepage_portfolio`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepagePortfolioDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomepagePortfolioDocumentData>, "homepage_portfolio", Lang>;
/** Content for Homepage Projects documents */
interface HomepageProjectsDocumentData {
    /**
     * Slice zone field in *Homepage Projects*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_projects.body[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    body: prismic.SliceZone<HomepageProjectsDocumentDataBodySlice>;
}
/**
 * Primary content in Homepage Projects → Slice zone → `homepage_project` → Primary
 *
 */
interface HomepageProjectsDocumentDataBodyHomepageProjectSlicePrimary {
    /**
     * Title field in *Homepage Projects → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_projects.body[].homepage_project.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismic.RichTextField;
    /**
     * Capabilities field in *Homepage Projects → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_projects.body[].homepage_project.primary.capabilities
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    capabilities: prismic.RichTextField;
    /**
     * description field in *Homepage Projects → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_projects.body[].homepage_project.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismic.RichTextField;
    /**
     * cta field in *Homepage Projects → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_projects.body[].homepage_project.primary.cta
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta: prismic.RichTextField;
    /**
     * Background Image field in *Homepage Projects → Slice zone → `homepage_project` → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_projects.body[].homepage_project.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismic.ImageField<never>;
}
/**
 * Item in Homepage Projects → Slice zone → `homepage_project` → Items
 *
 */
export interface HomepageProjectsDocumentDataBodyHomepageProjectSliceItem {
    /**
     * Slide field in *Homepage Projects → Slice zone → `homepage_project` → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_projects.body[].homepage_project.items[].slide
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    slide: prismic.ImageField<never>;
}
export type HomepageProjectsDocumentDataBodyHomepageProjectSlice = prismic.Slice<"homepage_project", Simplify<HomepageProjectsDocumentDataBodyHomepageProjectSlicePrimary>, Simplify<HomepageProjectsDocumentDataBodyHomepageProjectSliceItem>>;
/**
 * Slice for *Homepage Projects → Slice zone*
 *
 */
type HomepageProjectsDocumentDataBodySlice = HomepageProjectsDocumentDataBodyHomepageProjectSlice;
/**
 * Homepage Projects document from Prismic
 *
 * - **API ID**: `homepage_projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageProjectsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomepageProjectsDocumentData>, "homepage_projects", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Title field in *Navigation*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismic.TitleField;
    /**
     * Logo Mark field in *Navigation*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.logo_mark
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    logo_mark: prismic.LinkField;
    /**
     * Logo mark field in *Navigation*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.logo_mark1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo_mark1: prismic.ImageField<never>;
    /**
     * Slice zone field in *Navigation*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.body[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    body: prismic.SliceZone<NavigationDocumentDataBodySlice>;
}
/**
 * Primary content in Navigation → Slice zone → `menu_item` → Primary
 *
 */
interface NavigationDocumentDataBodyMenuItemSlicePrimary {
    /**
     * Title field in *Navigation → Slice zone → `menu_item` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.body[].menu_item.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismic.RichTextField;
    /**
     * Link field in *Navigation → Slice zone → `menu_item` → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.body[].menu_item.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    link: prismic.RichTextField;
}
export type NavigationDocumentDataBodyMenuItemSlice = prismic.Slice<"menu_item", Simplify<NavigationDocumentDataBodyMenuItemSlicePrimary>, never>;
/**
 * Slice for *Navigation → Slice zone*
 *
 */
type NavigationDocumentDataBodySlice = NavigationDocumentDataBodyMenuItemSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Table documents */
type TableDocumentData = Record<string, never>;
/**
 * Table document from Prismic
 *
 * - **API ID**: `table`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TableDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<TableDocumentData>, "table", Lang>;
export type AllDocumentTypes = HomepageDocument | HomepagePortfolioDocument | HomepageProjectsDocument | NavigationDocument | TableDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataBodyHomepageProjectSlicePrimary, HomepageDocumentDataBodyHomepageProjectSliceItem, HomepageDocumentDataBodyHomepageProjectSlice, HomepageDocumentDataBodyHomepageHeroSlicePrimary, HomepageDocumentDataBodyHomepageHeroSlice, HomepageDocumentDataBodyTableSlicePrimary, HomepageDocumentDataBodyTableSliceItem, HomepageDocumentDataBodyTableSlice, HomepageDocumentDataBodyHomepagePortfolioSliceSlicePrimary, HomepageDocumentDataBodyHomepagePortfolioSliceSliceItem, HomepageDocumentDataBodyHomepagePortfolioSliceSlice, HomepageDocumentDataBodyHomepagePortfolioDesktopSlicePrimary, HomepageDocumentDataBodyHomepagePortfolioDesktopSliceItem, HomepageDocumentDataBodyHomepagePortfolioDesktopSlice, HomepageDocumentDataBodySlice, HomepageDocument, HomepagePortfolioDocumentData, HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSlicePrimary, HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSliceItem, HomepagePortfolioDocumentDataBodyHomepagePortfolioSliceSlice, HomepagePortfolioDocumentDataBodySlice, HomepagePortfolioDocument, HomepageProjectsDocumentData, HomepageProjectsDocumentDataBodyHomepageProjectSlicePrimary, HomepageProjectsDocumentDataBodyHomepageProjectSliceItem, HomepageProjectsDocumentDataBodyHomepageProjectSlice, HomepageProjectsDocumentDataBodySlice, HomepageProjectsDocument, NavigationDocumentData, NavigationDocumentDataBodyMenuItemSlicePrimary, NavigationDocumentDataBodyMenuItemSlice, NavigationDocumentDataBodySlice, NavigationDocument, TableDocumentData, TableDocument, AllDocumentTypes };
    }
}