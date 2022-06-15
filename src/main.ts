import "virtual:windi.css";
import { themeChange } from "theme-change";
import windiConfig from "../windi.config";

themeChange();

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">EmailSea</h1>
      <p class="py-6">
        I haven't figured out what to write here...
      </p>
      <button class="btn btn-primary" disabled="disabled">Get Started</button>
      <p class="text-3xl py-6">
        But You can change theme!
      </p>
      ${
        windiConfig.daisyui.themes.map((theme)=>`<button data-set-theme="${theme}" data-act-class="ACTIVECLASS" class="btn m-2" data-theme="${theme}">${theme}</button>`).join(' ')
      }
      <p class="py-6">
        I can play all day 🤓
      </p>
    </div>
  </div>
</div>
`;
