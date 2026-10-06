CREATE TABLE public.cake_order_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_reference text NOT NULL UNIQUE CHECK (request_reference ~ '^TCV-[A-F0-9-]{8,40}$'),
  customer_name text NOT NULL CHECK (char_length(customer_name) BETWEEN 2 AND 100),
  customer_email text NOT NULL CHECK (char_length(customer_email) BETWEEN 5 AND 254 AND customer_email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  customer_phone text NOT NULL CHECK (char_length(regexp_replace(customer_phone, '[^0-9]', '', 'g')) BETWEEN 10 AND 15),
  delivery_address text NOT NULL CHECK (char_length(delivery_address) BETWEEN 10 AND 500),
  requested_date date,
  customer_note text NOT NULL DEFAULT '' CHECK (char_length(customer_note) <= 500),
  items jsonb NOT NULL CHECK (jsonb_typeof(items) = 'array' AND jsonb_array_length(items) BETWEEN 1 AND 20),
  estimated_total_inr integer NOT NULL CHECK (estimated_total_inr BETWEEN 1 AND 2000000),
  status text NOT NULL DEFAULT 'request_received' CHECK (status = 'request_received'),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.cake_order_requests TO anon, authenticated;
GRANT ALL ON public.cake_order_requests TO service_role;
ALTER TABLE public.cake_order_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can place cake order requests"
ON public.cake_order_requests FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(customer_name) BETWEEN 2 AND 100
  AND char_length(customer_email) BETWEEN 5 AND 254
  AND char_length(regexp_replace(customer_phone, '[^0-9]', '', 'g')) BETWEEN 10 AND 15
  AND char_length(delivery_address) BETWEEN 10 AND 500
  AND char_length(customer_note) <= 500
  AND jsonb_typeof(items) = 'array'
  AND jsonb_array_length(items) BETWEEN 1 AND 20
  AND estimated_total_inr BETWEEN 1 AND 2000000
  AND status = 'request_received'
);

CREATE TABLE public.custom_cake_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_reference text NOT NULL UNIQUE CHECK (request_reference ~ '^TCV-[A-F0-9-]{8,40}$'),
  customer_name text NOT NULL CHECK (char_length(customer_name) BETWEEN 2 AND 100),
  customer_email text NOT NULL CHECK (char_length(customer_email) BETWEEN 5 AND 254 AND customer_email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  customer_phone text NOT NULL CHECK (char_length(regexp_replace(customer_phone, '[^0-9]', '', 'g')) BETWEEN 10 AND 15),
  occasion text NOT NULL CHECK (char_length(occasion) BETWEEN 2 AND 80),
  flavour text NOT NULL CHECK (char_length(flavour) BETWEEN 2 AND 80),
  size text NOT NULL CHECK (char_length(size) BETWEEN 2 AND 30),
  dietary_preference text NOT NULL CHECK (dietary_preference IN ('Eggless', 'With egg')),
  requested_date date,
  design_notes text NOT NULL DEFAULT '' CHECK (char_length(design_notes) <= 1000),
  status text NOT NULL DEFAULT 'request_received' CHECK (status = 'request_received'),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.custom_cake_enquiries TO anon, authenticated;
GRANT ALL ON public.custom_cake_enquiries TO service_role;
ALTER TABLE public.custom_cake_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can send custom cake enquiries"
ON public.custom_cake_enquiries FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(customer_name) BETWEEN 2 AND 100
  AND char_length(customer_email) BETWEEN 5 AND 254
  AND char_length(regexp_replace(customer_phone, '[^0-9]', '', 'g')) BETWEEN 10 AND 15
  AND char_length(occasion) BETWEEN 2 AND 80
  AND char_length(flavour) BETWEEN 2 AND 80
  AND char_length(size) BETWEEN 2 AND 30
  AND dietary_preference IN ('Eggless', 'With egg')
  AND char_length(design_notes) <= 1000
  AND status = 'request_received'
);