import { Router } from "express";
import path from "path";
import fs from "fs";

const router = Router();

const APK_PATH = path.resolve(import.meta.dirname, "../assets/mubeen-beta.apk");
const APK_FILENAME = "Mubeen-Beta.apk";

router.get("/download/apk", (req, res) => {
  if (!fs.existsSync(APK_PATH)) {
    res.status(404).json({ error: "APK not found" });
    return;
  }

  const stat = fs.statSync(APK_PATH);

  res.setHeader("Content-Type", "application/vnd.android.package-archive");
  res.setHeader("Content-Disposition", `attachment; filename="${APK_FILENAME}"`);
  res.setHeader("Content-Length", stat.size);
  res.setHeader("Cache-Control", "no-cache");

  const stream = fs.createReadStream(APK_PATH);
  stream.pipe(res);
});

export default router;
