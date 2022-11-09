class FigureParams {
  a: number = 1;
}

export const calcArea = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const req = await request.body();
  const bodyValue: FigureParams = (await req.value) as FigureParams;
  console.log("bodyValue", bodyValue);

  console.log("request", request);
  console.log("response", response);

  const calcCoubArea = (a: number) => {
    return a * a * a;
  };

  const result: number = 6 * bodyValue.a * bodyValue.a;

  response.body = { result: calcCoubArea(bodyValue.a) };
};

export default {
  calcArea,
};
