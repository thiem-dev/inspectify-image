DROP TABLE IF EXISTS history

-- CREATE TABLE
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    caption TEXT,
    class_categories TEXT

-- SEED DATA INSERTS
INSERT INTO your_table_name (image_url, caption, class_categories)
VALUES ('https://cdn.shopify.com/s/files/1/0317/9853/files/inspiring-christmas-tree-ideas-102538741_large.jpg?v=1481831458', 'A christmas tree', '{"tree": 0.9, "jewelry": 0.1}');

-- Example 2
INSERT INTO your_table_name (image_url, caption, class_categories)
VALUES ('https://hips.hearstapps.com/hmg-prod/images/happy-dog-outdoors-royalty-free-image-1652927740.jpg?crop=0.447xw:1.00xh;0.187xw,0&resize=980:*', 'A happy dog', '{"dog": 0.8, "cat": 0.2}');

-- Example 3 (multiple class categories)
INSERT INTO your_table_name (image_url, caption, class_categories)
VALUES ('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg', 'A grumpy cat.', '{"mountain": 0.7, "sky": 0.2, "forest": 0.1}');