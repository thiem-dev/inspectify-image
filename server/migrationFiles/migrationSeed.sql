DROP TABLE IF EXISTS history;

-- CREATE TABLE
CREATE TABLE history(
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    caption TEXT,
    class_categories JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SEED DATA INSERTS
INSERT INTO history (image_url, caption, class_categories)
VALUES
  ('https://cdn.shopify.com/s/files/1/0317/9853/files/inspiring-christmas-tree-ideas-102538741_large.jpg?v=1481831458', 'A beautiful landscape', '[{"className":"mountain","probability":0.652345},{"className":"sky","probability":0.287543},{"className":"lake","probability":0.045112}]'::JSONB),
  ('https://hips.hearstapps.com/hmg-prod/images/happy-dog-outdoors-royalty-free-image-1652927740.jpg?crop=0.447xw:1.00xh;0.187xw,0&resize=980:*', 'A city skyline at night', '[{"className":"building","probability":0.773211},{"className":"cityscape","probability":0.196784},{"className":"night","probability":0.028005}]'::JSONB),
  ('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg', 'A vintage car exhibition', '[{"className":"car","probability":0.865432},{"className":"vintage","probability":0.123567},{"className":"crowd","probability":0.010001}]'::JSONB),
  ('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg', 'A peaceful beach scene', '[{"className":"ocean","probability":0.743289},{"className":"sand","probability":0.232134},{"className":"palm tree","probability":0.024577}]'::JSONB),
  ('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg', 'A group of friends hiking', '[{"className":"mountain","probability":0.621345},{"className":"hiking","probability":0.349876},{"className":"friends","probability":0.028779}]'::JSONB);
