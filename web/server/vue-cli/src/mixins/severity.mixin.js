import { Severity } from "@cc/report-server-types";

export default {
  methods: {
    severityFromCodeToString(severity) {
      switch (severity) {
      case Severity.UNSPECIFIED:
        return "Unspecified";
      case Severity.STYLE:
        return "Style";
      case Severity.LOW:
        return "Low";
      case Severity.MEDIUM:
        return "Medium";
      case Severity.HIGH:
        return "High";
      case Severity.CRITICAL:
        return "Critical";
      default:
        return "";
      }
    },

    severityFromStringToCode(severity) {
      switch (severity.toLowerCase()) {
      case "unspecified":
        return Severity.UNSPECIFIED;
      case "style":
        return Severity.STYLE;
      case "low":
        return Severity.LOW;
      case "medium":
        return Severity.MEDIUM;
      case "high":
        return Severity.HIGH;
      case "critical":
        return Severity.CRITICAL;
      default:
        return -1;
      }
    }
  }
};
