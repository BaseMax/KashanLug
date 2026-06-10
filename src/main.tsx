import m from "mithril";
import "./style.css";

import { Home }     from "./pages/Home";
import { Event }    from "./pages/Event";
import { Schedule } from "./pages/Schedule";
import { Team }     from "./pages/Team";
import { Blog }     from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { About }    from "./pages/About";
import { Contact }  from "./pages/Contact";
import { Join }     from "./pages/Join";
import { Charter }  from "./pages/Charter";
import { Auth }     from "./pages/Auth";
import { Resume }   from "./pages/Resume";
import { NotFound } from "./pages/NotFound";

// Hash routing - works everywhere without server config.
// URLs: /#/, /#/event, /#/blog/zig-programming-language, etc.
m.route.prefix = "#";

const app = document.getElementById("app");
if (!app) throw new Error("No #app element found");

m.route(app, "/", {
  "/":              Home,
  "/event":         Event,
  "/schedule":      Schedule,
  "/team":          Team,
  "/blog":          Blog,
  "/blog/:slug":    BlogPost,
  "/about":         About,
  "/contact":       Contact,
  "/join":          Join,
  "/charter":       Charter,
  "/auth":          Auth,
  "/resume":        Resume,
  "/:404...":       NotFound,
});
