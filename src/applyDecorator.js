/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

export default function applyDecorator(target, name, decorator) {
  let descriptor = Object.getOwnPropertyDescriptor(target, name);
  let nextDescriptor = decorator(target, name, descriptor) || descriptor;
  Object.defineProperty(target, name, nextDescriptor);
}
