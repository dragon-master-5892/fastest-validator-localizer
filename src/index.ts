console.log('Try npm run lint/fix!');

export function doSomeStuff(
  withThis = '',
  andThat = '',
  andThose: string[] = []
): string {
  //function on one line
  if (!andThose.length) {
    return 'B' + withThis;
  }
  return 'A' + andThat;
}
// TODO: more examples
