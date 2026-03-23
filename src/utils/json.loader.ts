import fs from "fs";
import path from "path";

const DATA_ROOT = path.resolve(process.cwd(), "src/data");

export function loadJson<T>(file: string): T {

    const filePath = path.join(DATA_ROOT, file);

    const raw = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(raw) as T;
}