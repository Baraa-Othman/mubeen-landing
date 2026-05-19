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

  res.download(APK_PATH, APK_FILENAME, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
});

router.head("/download/apk", (req, res) => {
  if (!fs.existsSync(APK_PATH)) {
    res.status(404).end();
    return;
  }
  const stat = fs.statSync(APK_PATH);
  res.setHeader("Content-Type", "application/vnd.android.package-archive");
  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Disposition", `attachment; filename="${APK_FILENAME}"`);
  res.setHeader("Accept-Ranges", "bytes");
  res.status(200).end();
});

export default router;
