import _ from "lodash";

export default function getName() {
  return _.times(3).reduce((acc, val) => `${acc} ${val}`);
}
