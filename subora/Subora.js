import {Register} from "../genes/Register.js"
import * as View1 from "./views/view1"

export const Subora = Register.global("$hxClasses")["subora.Subora"] = 
class Subora {
	static maina() {
		console.log("src/subora/Subora.hx:6:",View1.View1(1, 2));
	}
	static get __name__() {
		return "subora.Subora"
	}
	get __class__() {
		return Subora
	}
}

