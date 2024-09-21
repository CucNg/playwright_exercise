import { test } from "@playwright/test";
import fs from "fs";
import path from "path";

const authPath = "./auth.json";

test("Dependencies teardown", async () => {
  console.log("Performing dependencies teardown....");


  if (fs.existsSync(authPath)) {
    fs.unlinkSync(authPath);
    console.log("Auth file deleted successfully.");
  } else {
    console.log("No auth file found to delete.");
  }

});
