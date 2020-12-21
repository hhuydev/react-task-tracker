$(function () {
  $(
    ".section-grid-product .container .row .col-md-10 .section-right .render-products-area"
  ).owlCarousel();

  const products = [
    {
      id: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/14_635X700_crop_center.jpg?v=1591452425",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/13_635X700_crop_center.jpg",
      name: "Apple Iwatch 10",
      price: "928.691 VND",
      discount: "",
      star: "",
      category: ["electronic"],
    },
    {
      id: 2,
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/33_635X700_crop_center.jpg?v=1589806151",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/32_635X700_crop_center.jpg",
      name: "Black Beard",
      price: "278.607 VND",
      discount: "2.218.411 VND",
      star: "",
      category: ["electronic"],
    },
    {
      id: 3,
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/37_ad964caa-b098-4aa5-9721-faff8eef2759_635X700_crop_center.jpg?v=1589806164",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/36_d02ff299-23c1-479b-97b0-35547bfd7f63_635X700_crop_center.jpg",
      name: "Blue Bird T-Shirt",
      price: "5.804.321 VND",
      discount: "",
      star: "",
      category: ["electronic"],
    },
    {
      id: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/8_360dab44-923d-494d-9554-8b9d6b232c68_635X700_crop_center.jpg?v=1597495221",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/8_360dab44-923d-494d-9554-8b9d6b232c68_635X700_crop_center.jpg",
      name: "Coffee Macker (All Rounde)",
      price: "2.218.411 VND",
      discount: "577.550 VND",
      star: "",
      category: ["electronic"],
    },
    {
      id: 5,
      name: "Dinning Chairs",
      price: "1.501.631 VND",
      discount: "577.550 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/31_1a81623d-5e87-4c0e-a070-9f86275c7796_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/32_9b665f30-ab99-4fb7-8325-948a382a3f09_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 6,
      name: "Egestas Glass",
      price: "1.409.223 VND",
      discount: "1.178.203 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/58_a10725db-a1e9-4070-ade5-cf36c293f187_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/59_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 7,
      name: "Headphone pro10",
      price: "1.409.223 VND",
      discount: "1.178.203 VND",
      star:
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/6_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/7_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 8,
      name: "Loung Chairs",
      price: "",
      discount: "1.432.325 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/37_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/41_a42043bc-d46a-4961-b783-fb6ede805454_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 9,
      name: "Night Wear Top",
      price: "",
      discount: "11.551.008 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/49_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/50_a6c0598c-15e1-4370-beaa-e4bd8d993578_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 10,
      name: "",
      price: "3.696.323 VND",
      discount: "3.465.303 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/23_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/25_1ad58a9d-2209-4e7b-be58-29e900f7bbb8_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 11,
      name: "Sideboards",
      price: "13.514.680 VND",
      discount: "12.036.151 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/53_504a6de5-45aa-42d8-a4b3-bef28572a3f0_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/54_bdeaf79b-5c75-43de-a3fd-bb4d3d68fac3_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 12,
      name: "Smockstick stand",
      price: "",
      discount: "2.032.977 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/22_1c0673e1-abf9-4408-8625-8bb070cb093e_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/24_ab87b6ce-85cb-412d-8c84-d890cf2ab901_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 13,
      name: "supprt stool multiple",
      price: "3.049.466 VND",
      discount: "2.818.446 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/5_3768c619-2b99-4c50-ab23-288a431e93e4_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/23_a960ad93-810b-4514-93be-318a75d1e6dd_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 14,
      name: "Bata For Beats shoes",
      price: "7.046.115 VND",
      discount: "6.722.687 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/56_35a0a72b-939b-4bc4-8934-c148f1538c4b_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/57_8fa32850-f27f-49ca-9874-f18ce1b36c03_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 15,
      name: "Black Inner T-shirt",
      price: "19.174.674 VND",
      discount: "16.171.412 VND",
      star:
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/52_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/53_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 16,
      name: "Brown Bear",
      price: "",
      discount: "254.122.185 VND",
      star:
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/26_a2f4b209-0ea0-40b9-a184-cc9d571de5de_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/27_2ec21483-14e1-4fbe-93b2-dc36ce1fb2e1_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 17,
      name: "Cushion Bolster Covers",
      price: "2.207.398 VND",
      discount: "277.224 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/3_9e5db267-9a69-4fa5-b822-a3baa83591bf_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/3_9e5db267-9a69-4fa5-b822-a3baa83591bf_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 18,
      name: "Dinning Table",
      price: "1.478.529 VND",
      discount: "762.367 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/40_e26a2d54-7a08-4364-9aca-9061d50b267d_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/62_f19f9d07-7851-4bf3-8aba-e4912669248c_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 19,
      name: "Funky Scaff",
      price: "17.118.594 VND",
      discount: "12.838.946 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/40_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/39_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 20,
      name: "Livingroom siling light",
      price: "1.039.591 VND",
      discount: "947.183 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/21_e79bd9f7-242e-4b77-b15b-8d3726722668_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/26_e0a92b6e-6132-4da0-b140-548d7cdd408f_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 21,
      name: "Megamart special",
      price: "8.085.706 VND",
      discount: "5.775.504 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/31_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/30_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 22,
      name: "Portable speker",
      price: "",
      discount: "1.709.549 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/1_845d249a-9807-4bbf-af98-fa82ad916e15_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/3_f6982d74-5dcc-4092-8aec-ff7251e4fc6d_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 23,
      name: "Side Tables",
      price: "2.795.344 VND",
      discount: "2.287.100 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/58_863e4c3b-71f8-49b0-92a9-3198e777f5c1_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/59_00c8e657-17dc-43cf-b95d-57146d78a802_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 24,
      name: "Smartphone 6gb 12gb",
      price: "",
      discount: "924.081 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/1_8103c479-32a0-4850-88d4-e6be3ace3e0b_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/3_21b55675-ea56-4b65-bb5d-5fe1bc9180d4_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 25,
      name: "sony brand camera",
      price: "17.349.615 VND",
      discount: "17.118.594 VND",
      star:
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/10_a0b3a1fa-4d90-48e0-ad74-ee7924c48dd8_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/9_972bc655-f7bf-4fd0-8e56-b2d53796642c_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 26,
      name: "The Regan Boot in Suede",
      price: "",
      discount: "11.551.008 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/48_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/47_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
  ];

  const products_2 = [
    {
      id: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/14_635X700_crop_center.jpg?v=1591452425",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/13_635X700_crop_center.jpg",
      name: "Apple Iwatch 10",
      price: "928.691 VND",
      discount: "",
      star: "",
      category: ["electronic"],
    },
    {
      id: 2,
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/33_635X700_crop_center.jpg?v=1589806151",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/32_635X700_crop_center.jpg",
      name: "Black Beard",
      price: "278.607 VND",
      discount: "2.218.411 VND",
      star: "",
      category: ["electronic"],
    },
    {
      id: 3,
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/37_ad964caa-b098-4aa5-9721-faff8eef2759_635X700_crop_center.jpg?v=1589806164",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/36_d02ff299-23c1-479b-97b0-35547bfd7f63_635X700_crop_center.jpg",
      name: "Blue Bird T-Shirt",
      price: "5.804.321 VND",
      discount: "",
      star: "",
      category: ["electronic"],
    },
    {
      id: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/8_360dab44-923d-494d-9554-8b9d6b232c68_635X700_crop_center.jpg?v=1597495221",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/8_360dab44-923d-494d-9554-8b9d6b232c68_635X700_crop_center.jpg",
      name: "Coffee Macker (All Rounde)",
      price: "2.218.411 VND",
      discount: "577.550 VND",
      star: "",
      category: ["electronic"],
    },
    {
      id: 5,
      name: "Dinning Chairs",
      price: "1.501.631 VND",
      discount: "577.550 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/31_1a81623d-5e87-4c0e-a070-9f86275c7796_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/32_9b665f30-ab99-4fb7-8325-948a382a3f09_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 6,
      name: "Egestas Glass",
      price: "1.409.223 VND",
      discount: "1.178.203 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/58_a10725db-a1e9-4070-ade5-cf36c293f187_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/59_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 7,
      name: "Headphone pro10",
      price: "1.409.223 VND",
      discount: "1.178.203 VND",
      star:
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/6_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/7_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 8,
      name: "Loung Chairs",
      price: "",
      discount: "1.432.325 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/37_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/41_a42043bc-d46a-4961-b783-fb6ede805454_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 9,
      name: "Night Wear Top",
      price: "",
      discount: "11.551.008 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/49_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/50_a6c0598c-15e1-4370-beaa-e4bd8d993578_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 10,
      name: "",
      price: "3.696.323 VND",
      discount: "3.465.303 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/23_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/25_1ad58a9d-2209-4e7b-be58-29e900f7bbb8_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 11,
      name: "Sideboards",
      price: "13.514.680 VND",
      discount: "12.036.151 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/53_504a6de5-45aa-42d8-a4b3-bef28572a3f0_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/54_bdeaf79b-5c75-43de-a3fd-bb4d3d68fac3_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 12,
      name: "Smockstick stand",
      price: "",
      discount: "2.032.977 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/22_1c0673e1-abf9-4408-8625-8bb070cb093e_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/24_ab87b6ce-85cb-412d-8c84-d890cf2ab901_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 13,
      name: "supprt stool multiple",
      price: "3.049.466 VND",
      discount: "2.818.446 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/5_3768c619-2b99-4c50-ab23-288a431e93e4_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/23_a960ad93-810b-4514-93be-318a75d1e6dd_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 14,
      name: "Bata For Beats shoes",
      price: "7.046.115 VND",
      discount: "6.722.687 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/56_35a0a72b-939b-4bc4-8934-c148f1538c4b_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/57_8fa32850-f27f-49ca-9874-f18ce1b36c03_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 15,
      name: "Black Inner T-shirt",
      price: "19.174.674 VND",
      discount: "16.171.412 VND",
      star:
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/52_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/53_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 16,
      name: "Brown Bear",
      price: "",
      discount: "254.122.185 VND",
      star:
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/26_a2f4b209-0ea0-40b9-a184-cc9d571de5de_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/27_2ec21483-14e1-4fbe-93b2-dc36ce1fb2e1_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 17,
      name: "Cushion Bolster Covers",
      price: "2.207.398 VND",
      discount: "277.224 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/3_9e5db267-9a69-4fa5-b822-a3baa83591bf_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/3_9e5db267-9a69-4fa5-b822-a3baa83591bf_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 18,
      name: "Dinning Table",
      price: "1.478.529 VND",
      discount: "762.367 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/40_e26a2d54-7a08-4364-9aca-9061d50b267d_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/62_f19f9d07-7851-4bf3-8aba-e4912669248c_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 19,
      name: "Funky Scaff",
      price: "17.118.594 VND",
      discount: "12.838.946 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/40_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/39_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 20,
      name: "Livingroom siling light",
      price: "1.039.591 VND",
      discount: "947.183 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/21_e79bd9f7-242e-4b77-b15b-8d3726722668_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/26_e0a92b6e-6132-4da0-b140-548d7cdd408f_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 21,
      name: "Megamart special",
      price: "8.085.706 VND",
      discount: "5.775.504 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/31_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/30_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 22,
      name: "Portable speker",
      price: "",
      discount: "1.709.549 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/1_845d249a-9807-4bbf-af98-fa82ad916e15_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/3_f6982d74-5dcc-4092-8aec-ff7251e4fc6d_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 23,
      name: "Side Tables",
      price: "2.795.344 VND",
      discount: "2.287.100 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/58_863e4c3b-71f8-49b0-92a9-3198e777f5c1_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/59_00c8e657-17dc-43cf-b95d-57146d78a802_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 24,
      name: "Smartphone 6gb 12gb",
      price: "",
      discount: "924.081 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/1_8103c479-32a0-4850-88d4-e6be3ace3e0b_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/3_21b55675-ea56-4b65-bb5d-5fe1bc9180d4_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 25,
      name: "sony brand camera",
      price: "17.349.615 VND",
      discount: "17.118.594 VND",
      star:
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/10_a0b3a1fa-4d90-48e0-ad74-ee7924c48dd8_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/9_972bc655-f7bf-4fd0-8e56-b2d53796642c_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
    {
      id: 26,
      name: "The Regan Boot in Suede",
      price: "",
      discount: "11.551.008 VND",
      star: "",
      image:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/48_635X700_crop_center.jpg",
      image2:
        "https://cdn.shopify.com/s/files/1/0318/4335/2712/products/47_635X700_crop_center.jpg",
      category: ["electronic", "furniture", "cloth"],
    },
  ];

  // const recentNews = [
  //   {
  //     id: 1,
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0318/4335/2712/articles/b4_1024x1024.jpg?v=1599211181",
  //     time: "Sep 04, 2020",
  //     comment: "2 Comment",
  //     title: "Load More Product Features",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0318/4335/2712/articles/b3_1024x1024.jpg?v=1599211177",
  //     time: "Sep 04, 2020",
  //     comment: "0 Comment",
  //     title: "Shop Side Bar Filter Tags",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0318/4335/2712/articles/b2_1024x1024.jpg?v=1599211172",
  //     time: "Sep 04, 2020",
  //     comment: "0 Comment",
  //     title: "Product Varient Gellery",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0318/4335/2712/articles/b1_1024x1024.jpg?v=1599211167",
  //     time: "Sep 04, 2020",
  //     comment: "0 Comment",
  //     title: "Ajax Filter Load Items",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0318/4335/2712/articles/Untitled-1_1024x1024.jpg?v=1591438533",
  //     time: "May 31, 2020",
  //     comment: "2 Comment",
  //     title: "This Is Our Collection Of The Best",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...",
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0318/4335/2712/articles/blog3_1024x1024.jpg?v=1583242183",
  //     time: "Mar 03, 2020",
  //     comment: "1 Comment",
  //     title: "This Is Our Collection Of The Best",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...",
  //   },
  //   {
  //     id: 7,
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0318/4335/2712/articles/blog1_1024x1024.jpg?v=1583241755",
  //     time: "Mar 03, 2020",
  //     comment: "0 Comment",
  //     title: "This Is Our Collection Of The Best",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...",
  //   },
  //   {
  //     id: 8,
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0318/4335/2712/articles/blog2_1024x1024.jpg?v=1583242126",
  //     time: "Mar 03, 2020",
  //     comment: "0 Comment",
  //     title: "This Is Our Collection Of The Best",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...",
  //   },
  // ];

  const allCategory = $(
    ".section-grid-product .container .row .col-md-10 .section-right .products-area .row .col-sm-8 .categories li a"
  );
  console.log("category clicked");

  for (let i = 0; i < allCategory.length; i++) {
    if ($(allCategory[i]).hasClass("active")) {
      const category = $(allCategory[i]).data("category");
      const activeProducts = products.filter((val) =>
        val.category.includes(category)
      );
      renderOwl(
        activeProducts,
        ".section-grid-product .container .row .col-md-10 .section-right .render-products-area"
      );
    }
  }

  $(
    ".section-grid-product .container .row .col-md-10 .section-right .products-area .row .col-sm-8 .categories li a"
  ).click(function (e) {
    e.preventDefault(); // loai bo su kien mac dinh
    console.log("category clicked");

    $(
      ".section-grid-product .container .row .col-md-10 .section-right .products-area .row .col-sm-8 .categories li a"
    ).removeClass("active");

    $(this).addClass("active");

    // lay category
    const category = $(this).data("category");

    const filterProducts = products.filter((val) =>
      val.category.includes(category)
    );
    // removeOwl(".products-owl .owl-carousel");

    removeOwl(products);
    renderOwl(
      filterProducts,
      ".section-grid-product .container .row .col-md-10 .section-right .render-products-area"
    );
  });

  renderOwl2(
    products_2,
    ".section-grid-product .container .row .col-md-10 .section-right .section-trending-products #render-trending-products"
  );
});

function removeOwl(products) {
  for (let i = 0; i < products.length; i++) {
    $(
      ".section-grid-product .container .row .col-md-10 .section-right .render-products-area"
    )
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}

function renderOwl(list, selector) {
  // dao nguoc 1 array bang .reverse()
  // .map((val, index) => {
  // remove all item in owl
  // add list san pham vao owl
  console.log('rendered')

  for (let i = 1; i <= list.length / 8; i++) {
    let col = "";
    list
      .slice((i - 1) * 8, i * 8)
      .reverse()
      .map((val) => {
        col += `<div class="col-md-3">
                  <div class="item-products">
                    <div class="images-products">
                      <a class="img-item">
                        <img class="image-one" src="${val.image}" alt="">
                        <img class="image-two" src="${val.image2}" alt="">
                      </a>
                      <div class="product-wishlist">
                        <a class="wishlist">
                          <i class="far fa-heart"></i>
                        </a>
                      </div>
                      <div class="product-quickview">
                        <a class="quickview">
                          <i class="far fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-content">
                      <h3>
                        <a href="">${val.name}</a>
                      </h3>
                      <div class="icon-star">
                        ${val.star}
                      </div>
                      <div class="price flex j-center">
                        <h4 class="old-price">${val.price}</h4>
                        <span class="discount">${val.discount}</span>
                      </div>
                      <div class="add-to-cart">
                        <a class="btn-add-to-cart" href="">${`ADD TO CART`}</a>
                      </div>
                    </div>
                  </div>
                </div>`;
      });

      $(selector).trigger("add.owl.carousel", [
        `<div class="items-container">
          <div class="row">
            ${col}
          </div>
        </div>`,
        i - 1,
      ]).trigger("refresh.owl.carousel");
  }
}

function renderOwl2(list, selector) {
  // dao nguoc 1 array bang .reverse()
  list.reverse().map((val, index) => {
    // remove all item in owl
    // add list san pham vao owl
    $(selector)
      .trigger("add.owl.carousel", [
        `<div class="item-products">
                    <div class="images-products">
                      <a class="img-item">
                        <img class="image-one" src="${val.image}" alt="">
                        <img class="image-two" src="${val.image2}" alt="">
                      </a>
                      <div class="product-wishlist">
                        <a class="wishlist">
                          <i class="far fa-heart"></i>
                        </a>
                      </div>
                      <div class="product-quickview">
                        <a class="quickview">
                          <i class="far fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-content">
                      <h3>
                        <a href="">${val.name}</a>
                      </h3>
                      <div class="icon-star">
                        ${val.star}
                      </div>
                      <div class="price flex  j-center">
                        <h4 class="old-price">${val.price}</h4>
                        <span class="discount">${val.discount}</span>
                      </div>
                      <div class="add-to-cart">
                        <a class="btn-add-to-cart" href="">${`ADD TO CART`}</a>
                      </div>
                    </div>
        </div>`,
        index,
      ])
      .trigger("refresh.owl.carousel");
  });
}
