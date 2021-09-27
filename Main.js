import {Subora} from "./subora/Subora.js"
import {Register} from "./genes/Register.js"

export const Main = Register.global("$hxClasses")["Main"] = 
class Main {
	static main() {
		console.log("src/Main.hx:5:",1);
		Subora.maina();
	}
	static get __name__() {
		return "Main"
	}
	get __class__() {
		return Main
	}
}

