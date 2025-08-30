export type Plan = 'free' | 'pro' | 'enterprise';

export type FontChoice = 'inter' | 'plus-jakarta-sans';

export type BlockType = 'link' | 'button' | 'image' | 'hero' | 'text' | 'video_embed' | 'gallery' | 'pricing' | 'booking' | 'contact_form' | 'testimonial' | 'social_feed' | 'download';

export type EventType = 'page_view' | 'link_click' | 'form_submit';

export interface User {
  id: string;
  email: string;
  display_name?: string;
  avatar_url?: string;
  stripe_customer_id?: string;
  plan: Plan;
  created_at: string;
  last_login?: string;
}

export interface Site {
  id: string;
  user_id: string;
  slug: string;
  title?: string;
  description?: string;
  brand_color?: string;
  accent_color?: string;
  font_choice: FontChoice;
  published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
  custom_domain?: string;
  qr_code_url?: string;
}

export interface Page {
  id: string;
  site_id: string;
  slug: string;
  title: string;
  order: number;
  meta_title?: string;
  meta_description?: string;
  created_at: string;
  updated_at: string;
}

export interface Block {
  id: string;
  page_id: string;
  type: BlockType;
  order: number;
  content: Record<string, unknown>; // jsonb
  styles: Record<string, unknown>; // jsonb
  created_at: string;
  updated_at: string;
}

export interface Template {
  id: string;
  title: string;
  slug: string;
  author: string;
  preview_image_url?: string;
  default_site_schema: Record<string, unknown>; // jsonb
  price: number;
  tags: string[];
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  site_id: string;
  page_id?: string;
  event_type: EventType;
  meta: Record<string, unknown>; // jsonb
  created_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  stripe_invoice_id?: string;
  amount: number;
  currency: string;
  plan: Plan;
  status: string;
  created_at: string;
}

export interface Domain {
  id: string;
  site_id: string;
  domain: string;
  verified: boolean;
  verification_token?: string;
  created_at: string;
}

export interface Export {
  id: string;
  site_id: string;
  user_id: string;
  status: 'pending' | 'done' | 'failed';
  export_url?: string;
  created_at: string;
}

export interface MarketplacePurchase {
  id: string;
  template_id: string;
  buyer_user_id: string;
  price: number;
  created_at: string;
}

// Block content schemas
export interface LinkBlockContent {
  label: string;
  url: string;
  style: {
    variant: 'primary' | 'secondary';
    rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    fullWidth: boolean;
  };
}

export interface ImageBlockContent {
  src: string;
  alt: string;
  caption?: string;
  link?: string;
  styles: {
    ratio: string;
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  };
}

export interface PricingBlockContent {
  items: {
    name: string;
    price: string;
    desc: string;
    cta_url: string;
  }[];
  layout: 'columns' | 'grid';
  currency: string;
}

export interface BookingBlockContent {
  provider: 'calendly' | 'acuity';
  embed_url: string;
  show_button: boolean;
  button_text: string;
}

export interface ContactFormBlockContent {
  fields: {
    name: string;
    type: 'text' | 'email' | 'textarea';
    required: boolean;
  }[];
  destination: string;
  success_message: string;
}
