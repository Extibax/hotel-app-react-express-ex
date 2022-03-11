/* Modules */
import { Router } from "express";
import mongoose from "mongoose";

/* Models */
import hotelModel from "../models/hotel";

/* Init */
const hotel_routes = Router();

/* Routes */
hotel_routes.get("/", (req, res) => {
  res.status(200).send({
    message: "menu index route",
  });
});

hotel_routes.get("/get-hotels", async (req, res) => {
  console.log("**********", "/get-hotels", "**********");

  const hotels = await hotelModel.find();
  console.log("hotels:", hotels);

  res.json(hotels);
});

hotel_routes.get("/get-hotels/:sort_by", async (req, res) => {
  console.log("**********", "/get-hotels/:sort_by", "**********");

  const hotels = await hotelModel.find();
  console.log("hotels:", hotels);

  if (req.params.sort_by) {
    const { sort_by } = req.params;

    let hotels_sorted = [];

    if (sort_by === "by_category_major" || sort_by === "by_category_minor") {
      hotels_sorted = hotels.sort((a, b) => {
        let b_parsed = parseFloat(b.category);
        let a_parsed = parseFloat(a.category);

        return b_parsed - a_parsed;
      });

      if (sort_by === "by_category_minor") {
        hotels_sorted = hotels_sorted.reverse();
      }
    } else if (sort_by === "by_price_major" || sort_by === "by_price_minor") {
      hotels_sorted = hotels.sort((a, b) => {
        let b_parsed = parseFloat(b.price);
        let a_parsed = parseFloat(a.price);

        return b_parsed - a_parsed;
      });

      if (sort_by === "by_price_minor") {
        hotels_sorted = hotels_sorted.reverse();
      }
    } else {
      hotels_sorted = hotels;
    }

    res.json(hotels_sorted);
  } else {
    res.json(hotels);
  }
});

hotel_routes.post("/insert-hotel", async (req, res) => {
  console.log("**********", "/insert-hotel", "**********");
  console.log("req.body:", req.body);

  let return_obj = {};

  try {
    const {
      hotel_name,
      category,
      price,
      photos,
      reviews,
      hotel_desc,
      hotel_location,
    } = req.body;

    if (
      hotel_name &&
      category &&
      price &&
      photos &&
      reviews &&
      hotel_desc &&
      hotel_location
    ) {
      const newHotel = new hotelModel();

      newHotel.hotel_name = hotel_name;
      newHotel.hotel_desc = hotel_desc;
      newHotel.hotel_location = hotel_location;
      newHotel.category = category;
      newHotel.price = price;
      newHotel.photos = photos;
      newHotel.reviews = reviews;

      const hotel_save_res = await newHotel.save();

      console.log("hotel_save_res:", hotel_save_res);

      return_obj = {
        message: "new hotel saved",
        hotel_save_res,
      };

      console.log("return_obj:", return_obj);

      res.status(200).send(return_obj);
    } else {
      return_obj = {
        message: "faltan parametros",
      };

      res.status(401).send(return_obj);
    }
  } catch (error) {
    return_obj = {
      message: "trycatch error",
      error_message: error,
    };

    console.log("return_obj:", return_obj);

    res.send(return_obj);
  }
});

hotel_routes.put("/update-hotel", async (req, res) => {
  console.log("**********", "/update-hotel", "**********");
  console.log("req.body:", req.body);

  let return_obj = {};

  const {
    id,
    hotel_name,
    category,
    price,
    photos,
    reviews,
    hotel_desc,
    hotel_location,
  } = req.body;

  if (
    id &&
    hotel_name &&
    category &&
    price &&
    photos &&
    reviews &&
    hotel_desc &&
    hotel_location
  ) {
    const update_res = await hotelModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      {
        hotel_name,
        hotel_desc,
        hotel_location,
        category,
        price,
        photos,
        reviews,
      }
    );

    if (update_res) {
      console.log("update_res:", update_res);

      return_obj = {
        message: "new hotel updated",
        update_res,
      };

      console.log("return_obj:", return_obj);

      res.status(200).send(return_obj);
    }
  } else {
    return_obj = {
      message: "faltan parametros",
    };

    res.status(401).send(return_obj);
  }
});

hotel_routes.delete("/delete-hotel", async (req, res) => {
  console.log("**********", "/delete-hotel", "**********");
  console.log("req.body:", req.body);

  let return_obj = {};

  const { id } = req.body;

  if (id) {
    const delete_res = await hotelModel.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (delete_res) {
      console.log("delete_res:", delete_res);

      return_obj = {
        message: "hotel deleted",
      };

      console.log("normal id:", id);
      console.log("parsed id:", new mongoose.Types.ObjectId(id));

      console.log("return_obj:", return_obj);

      res.status(200).send(return_obj);
    }
  } else {
    return_obj = {
      message: "faltan parametros",
    };

    res.status(401).send(return_obj);
  }
});

export default hotel_routes;
