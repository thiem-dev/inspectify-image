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
  ('https://cdn.shopify.com/s/files/1/0317/9853/files/inspiring-christmas-tree-ideas-102538741_large.jpg?v=1481831458', 'A christmas tree', '{"tree": 0.9, "jewelry": 0.1}'),
  ('https://hips.hearstapps.com/hmg-prod/images/happy-dog-outdoors-royalty-free-image-1652927740.jpg?crop=0.447xw:1.00xh;0.187xw,0&resize=980:*', 'A happy dog', '{"dog": 0.8, "cat": 0.2}'),
  ('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg', 'A grumpy cat.', '{"mountain": 0.7, "sky": 0.2, "forest": 0.1}'),
  ('https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'land rover', NULL),
  ('https://images.unsplash.com/photo-1702482858444-81b00ec28c27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D', 'snow dog', NULL),
  ('https://plus.unsplash.com/premium_photo-1697139065201-50c05c556fd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D', 'food platter', NULL),
  ('https://images.unsplash.com/photo-1702700415763-3ad5a9bdde48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D', 'happy dog', NULL),
  ('https://images.unsplash.com/photo-1702889547601-663c174a2ef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D', 'effiel tower', NULL);
