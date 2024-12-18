const Supplier = require("../models/supplier");
const Product = require("../models/product");
const { Op } = require("sequelize");

exports.getAllSuppliers = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["limit", "sort", "page", "fields"];
    excludeFields.forEach((field) => delete queryObj[field]);

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const offset = (page - 1) * limit;
    const where = {};

    for (const key in queryObj) {
      if (queryObj[key]) {
        where[key] = { [Op.like]: `%${queryObj[key]}%` };
      }
    }

    const sort = req.query.sort;
    const order = sort ? [sort?.split(":")] : [["name", "asc"]];

    const suppliers = await Supplier.findAndCountAll({
      where,
      offset,
      limit,
      order,
    });

    res.status(200).json({
      message: "getAllSuppliers",
      suppliers: suppliers.rows,
      currentPage: page,
      totalPages: Math.ceil(suppliers?.count / limit) || 0,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch suppliers.", error: error.message });
  }
};

exports.createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json({
      message: "supplier created successfully.",
      supplier,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create supplier.",
      error: error.message,
    });
  }
};

exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);

    if (!supplier) {
      return res.status(404).json({ message: "supplier not found" });
    }

    res.status(201).json({
      message: "supplier found.",
      supplier,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to find supplier.",
      error: error.message,
    });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: "User not found" });
    }

    const updated = await Supplier.update(req.body, {
      where: { supplier_id: req.params.id },
    });

    res.status(201).json({
      message: "supplier updated successfully.",
      supplier: updated,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to update supplier.",
      error: error.message,
    });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);

    if (!supplier) {
      return res.status(404).json({ message: "supplier not found" });
    }
    const deleted = await Supplier.destroy({
      where: { supplier_id: req.params.id },
    });

    res.status(201).json({
      message: "supplier deleted successfully.",
      supplier: deleted,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete supplier.",
      error: error.message,
    });
  }
};

exports.addProductsToSupplier = async (req, res) => {
  try {
    const supplier_id = req.query.supplier_id;
    const product_ids = req.body.products;

    const supplier = await Supplier.findByPk(supplier_id);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    const products = await Product.findAll({
      where: { product_id: { [Op.in]: product_ids } },
    });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found with the provided IDs." });
    }

    await supplier.addProducts(products); 

    res.status(200).json({
      message: "Products successfully added to supplier.",
      addedProducts: products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to add products to supplier.",
      error: err.message,
    });
  }
};

exports.removeProductsFromSupplier = async (req, res) => {
  try {
    const supplier_id = req.query.supplier_id;
    const product_ids = req.body.products;

    const supplier = await Supplier.findByPk(supplier_id);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    const products = await Product.findAll({
      where: { product_id: { [Op.in]: product_ids } },
    });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found with the provided IDs." });
    }

    const hasProducts = await supplier.hasProducts(products);

    if (!hasProducts) {
      return res.status(400).json({ message: "Products not assigned to supplier." });
    }
    
    await supplier.removeProducts(products);

    res.status(200).json({
      message: "Products successfully removed from supplier.",
      addedProducts: products,
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to remove products from supplier.",
      error: err.message,
    });
  }
};