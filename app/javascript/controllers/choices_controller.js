import { Controller } from "@hotwired/stimulus";
import Choices from "choices.js";
let userChoices = null;

// Connects to data-controller="choices"
export default class extends Controller {
  static targets = ["users"];

  connect() {
    userChoices = new Choices(this.usersTarget);
  }

  disconnect() {
    userChoices.destroy();
  }
}
