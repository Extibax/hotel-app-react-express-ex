/* Modules */
import { Router } from "express";
import mongoose from "mongoose";

/* Models */
import hotelModel from "../models/reporte";

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

  const reportes = await hotelModel.find();
  console.log("hotels:", reportes);

  res.json(reportes);
});

hotel_routes.post("/insert-hotel", async (req, res) => {
  console.log("**********", "/insert-hotel", "**********");
  console.log("req.body:", req.body);

  let return_obj = {};

  try {
    const {
      concepto,
      fecha_desde,
      fecha_desde_raw,
      fecha_hasta,
      fecha_hasta_raw,
      nombre,
      posicion,
      departamento,
      supervisor,
      gastos,
      aprobado_por,
      firma,
    } = req.body;

    if (
      concepto &&
      fecha_desde &&
      fecha_desde_raw &&
      fecha_hasta &&
      fecha_hasta_raw &&
      nombre &&
      posicion &&
      departamento &&
      supervisor &&
      gastos &&
      aprobado_por &&
      firma
    ) {
      const newReporte = new hotelModel();

      newReporte.concepto = concepto;
      newReporte.fecha_desde = fecha_desde;
      newReporte.fecha_desde_raw = fecha_desde_raw;
      newReporte.fecha_hasta = fecha_hasta;
      newReporte.fecha_hasta_raw = fecha_hasta_raw;
      newReporte.nombre = nombre;
      newReporte.posicion = posicion;
      newReporte.departamento = departamento;
      newReporte.supervisor = supervisor;
      newReporte.gastos = gastos;
      newReporte.aprobado_por = aprobado_por;
      newReporte.firma = firma;

      const reporte_save_res = await newReporte.save();

      console.log("reporte_save_res:", reporte_save_res);

      return_obj = {
        message: "new reporte saved",
        reporte_save_res,
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
    concepto,
    fecha_desde,
    fecha_desde_raw,
    fecha_hasta,
    fecha_hasta_raw,
    nombre,
    posicion,
    departamento,
    supervisor,
    gastos,
    aprobado_por,
    firma,
  } = req.body;

  if (
    id &&
    concepto &&
    fecha_desde &&
    fecha_desde_raw &&
    fecha_hasta &&
    fecha_hasta_raw &&
    nombre &&
    posicion &&
    departamento &&
    supervisor &&
    gastos &&
    aprobado_por &&
    firma
  ) {
    const update_res = await hotelModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      {
        concepto,
        fecha_desde,
        fecha_desde_raw,
        fecha_hasta,
        fecha_hasta_raw,
        nombre,
        posicion,
        departamento,
        supervisor,
        gastos,
        aprobado_por,
        firma,
      }
    );

    if (update_res) {
      console.log("update_res:", update_res);

      return_obj = {
        message: "new reporte updated",
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
        message: "reported deleted",
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
