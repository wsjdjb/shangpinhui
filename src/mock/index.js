import floor from "./floor.json"
import banner from "./banner.json"
import mockjs from "mockjs"

mockjs.mock("/mock/floor",{code:200,data:floor})
mockjs.mock("/mock/banner",{code:200,data:banner})
