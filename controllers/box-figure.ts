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
    return 6 * a * a;
  };

  const result: number = calcCoubArea(bodyValue.a);

  response.body = { result };
};

export default {
  calcArea,
};
