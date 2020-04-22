/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface components {
  schemas: {
    ID: string;
    OptionalID: string;
    FlexID: string;
    OptionalFlexID: string;
    Label: string;
    OptionalLabel: string;
    FeatureValueLabel: string;
    Location: string;
    Platform: string;
    Name: string;
    OptionalName: string;
    LogoURL: string;
    OptionalLogoURL: string;
    RegionBody: {
      platform: components["schemas"]["Platform"];
      location: components["schemas"]["Location"];
      name: string;
      priority: number;
    };
    Region: {
      id: components["schemas"]["ID"];
      type: "region";
      version: number;
      body: components["schemas"]["RegionBody"];
    };
    CreateRegion: { body: components["schemas"]["RegionBody"] };
    UpdateRegion: { name: string };
    ProviderBody: {
      owner_id?: components["schemas"]["OptionalFlexID"];
      team_id?: components["schemas"]["OptionalID"];
      label: components["schemas"]["Label"];
      name: components["schemas"]["Name"];
      logo_url?: components["schemas"]["LogoURL"];
      support_email?: string;
      documentation_url?: string;
    };
    UpdateProviderBody: {
      owner_id?: components["schemas"]["OptionalFlexID"];
      team_id?: components["schemas"]["OptionalID"];
      label?: components["schemas"]["OptionalLabel"];
      name?: components["schemas"]["OptionalName"];
      logo_url?: components["schemas"]["OptionalLogoURL"];
      support_email?: string;
      documentation_url?: string;
    };
    Provider: {
      id: components["schemas"]["ID"];
      version: number;
      type: "provider";
      body: components["schemas"]["ProviderBody"];
    };
    CreateProvider: { body: components["schemas"]["ProviderBody"] };
    UpdateProvider: {
      id: components["schemas"]["ID"];
      body: components["schemas"]["UpdateProviderBody"];
    };
    UpdateProduct: {
      id: components["schemas"]["ID"];
      body: components["schemas"]["UpdateProductBody"];
    };
    UpdateProductBody: {
      name?: components["schemas"]["Name"];
      label?: components["schemas"]["Label"];
      logo_url?: components["schemas"]["LogoURL"];
      listing?: components["schemas"]["ProductListing"];
      tagline?: string;
      value_props?: components["schemas"]["ValueProp"][];
      setup_steps?: string[];
      images?: components["schemas"]["ProductImageURL"][];
      support_email?: string;
      documentation_url?: string;
      terms_url?: string;
      feature_types?: components["schemas"]["FeatureType"][];
      integration?: {
        provisioning?: components["schemas"]["ProductProvisioning"];
        base_url?: string;
        sso_url?: string;
        version?: "v1";
        features?: {
          access_code?: boolean;
          sso?: boolean;
          plan_change?: boolean;
          credential?: "none" | "single" | "multiple" | "unknown";
        };
      };
      platform_ids?: components["schemas"]["ID"][];
      tags?: components["schemas"]["ProductTags"];
    };
    UpdatePlan: {
      id: components["schemas"]["ID"];
      body: components["schemas"]["UpdatePlanBody"];
    };
    UpdatePlanBody: {
      name?: components["schemas"]["Name"];
      label?: components["schemas"]["Label"];
      state?: components["schemas"]["PlanState"];
      has_resize_constraints?: boolean;
      resizable_to?: components["schemas"]["PlanResizeList"];
      regions?: components["schemas"]["ID"][];
      features?: components["schemas"]["FeatureValue"][];
      trial_days?: number;
      cost?: number;
    };
    FeatureType: {
      label: components["schemas"]["Label"];
      name: components["schemas"]["Name"];
      type: "boolean" | "string" | "number";
      customizable?: boolean;
      upgradable?: boolean;
      downgradable?: boolean;
      measurable?: boolean;
      values?: components["schemas"]["FeatureValuesList"];
    };
    FeatureValuesList: components["schemas"]["FeatureValueDetails"][];
    FeatureValueDetails: {
      label: components["schemas"]["FeatureValueLabel"];
      name: components["schemas"]["Name"];
      cost?: number;
      price?: {
        cost?: number;
        multiply_factor?: number;
        formula?: components["schemas"]["PriceFormula"];
        description?: string;
      };
      numeric_details?: components["schemas"]["FeatureNumericDetails"];
    };
    FeatureNumericDetails: {
      increment?: number;
      min?: number;
      max?: number;
      suffix?: string;
      cost_ranges?: components["schemas"]["FeatureNumericRange"][];
    };
    FeatureNumericRange: { limit?: number; cost_multiple?: number };
    FeatureValue: {
      feature: components["schemas"]["Label"];
      value: components["schemas"]["FeatureValueLabel"];
    };
    ValueProp: { header: string; body: string };
    ProductImageURL: string;
    ProductTags: components["schemas"]["Label"][];
    ProductState: "available" | "hidden" | "grandfathered" | "new" | "upcoming";
    ProductListing: {
      public?: boolean;
      listed?: boolean;
      marketing?: { beta?: boolean; new?: boolean; featured?: boolean };
    };
    ProductProvisioning: "provider-only" | "pre-order" | "public";
    ProductIntegrationFeatures: {
      access_code?: boolean;
      sso?: boolean;
      plan_change?: boolean;
      region?: "user-specified" | "unspecified";
      credential?: "none" | "single" | "multiple" | "unknown";
    };
    ProductBody: {
      provider_id: components["schemas"]["ID"];
      label: components["schemas"]["Label"];
      name: components["schemas"]["Name"];
      state: components["schemas"]["ProductState"];
      listing: components["schemas"]["ProductListing"];
      logo_url: components["schemas"]["LogoURL"];
      tagline: string;
      value_props: components["schemas"]["ValueProp"][];
      setup_steps?: string[];
      images: components["schemas"]["ProductImageURL"][];
      support_email: string;
      documentation_url: string;
      terms: { url?: string; provided: boolean };
      feature_types: components["schemas"]["FeatureType"][];
      billing: {
        type: "monthly-prorated" | "monthly-anniversary" | "annual-anniversary";
        currency: "usd";
      };
      integration: {
        provisioning: components["schemas"]["ProductProvisioning"];
        base_url: string;
        sso_url?: string;
        version: "v1";
        features: components["schemas"]["ProductIntegrationFeatures"];
      };
      tags?: components["schemas"]["ProductTags"];
    };
    Product: {
      id: components["schemas"]["ID"];
      version: number;
      type: "product";
      body: components["schemas"]["ProductBody"];
    };
    CreateProduct: { body: components["schemas"]["ProductBody"] };
    PlanResizeList: components["schemas"]["ID"][];
    PlanBody: {
      provider_id: components["schemas"]["ID"];
      product_id: components["schemas"]["ID"];
      name: components["schemas"]["Name"];
      label: components["schemas"]["Label"];
      state: components["schemas"]["PlanState"];
      resizable_to?: components["schemas"]["PlanResizeList"];
      regions: components["schemas"]["ID"][];
      features: components["schemas"]["FeatureValue"][];
      trial_days?: number;
      cost: number;
    };
    PlanState: "hidden" | "available" | "grandfathered" | "unlisted";
    ExpandedPlanBody: components["schemas"]["PlanBody"] & {
      expanded_features: components["schemas"]["ExpandedFeature"][];
      free: boolean;
      defaultCost?: number;
      customizable?: boolean;
    };
    ExpandedFeature: components["schemas"]["FeatureType"] & {
      value_string: string;
      value: components["schemas"]["FeatureValueDetails"];
    };
    Plan: {
      id: components["schemas"]["ID"];
      version: number;
      type: "plan";
      body: components["schemas"]["PlanBody"];
    };
    ExpandedPlan: {
      id: components["schemas"]["ID"];
      version: number;
      type: "plan";
      body: components["schemas"]["ExpandedPlanBody"];
    };
    CreatePlan: { body: components["schemas"]["PlanBody"] };
    Error: { type: string; message: string[] };
    PriceFormula: string;
    ExpandedProduct: {
      id: components["schemas"]["ID"];
      version: number;
      type: "product";
      body: components["schemas"]["ProductBody"];
      plans?: components["schemas"]["ExpandedPlan"][];
      provider: components["schemas"]["Provider"];
    };
  };
}