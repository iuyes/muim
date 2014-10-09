function o2s(o) {
				if ("number" == (szTp = typeof o)) {
					return isFinite(o) ? o : 0
				} else {
					if ("boolean" == szTp || null == o) {
						return o
					}
					if ("object" == szTp) {
						if (o.constructor == Array)
							return list2s(o);
						return o2json(o)
					} else {
						k = {
							"\r": "",
							"\n": "\\n",
							"\t": "\\t",
							"\b": "\\b",
							"\f": "\\f",
							"'": "\'"
						};
						return "\'" + (o || "").toString().replace(/([\r\n\t\b\f'])/gm, function(a, b) {
							return "\\" + k[b]
						}) + "\'"
					}
				}
			}

			function list2s(o) {
				if (o.length > 0) {
					var k, a = [];
					for (k in o)
						a.push(o2s(o[k]));
					return "[" + a.join(",").replace(/([\r\n\t\b\f"])/gm, "\\$1") + "]"
				} else
					return '[]'
			}

			function o2json(o) {
				var k, a = [];
				if ("object" == typeof o && o) {
					for (k in o) {
						a.push("'" + k + "':" + o2s(o[k]))
					}
					return "{" + a.join(",").replace(/([\r\n\t\b\f"])/gm, "\\$1") + "}"
				} else {
					return o2s(o)
				}
			};