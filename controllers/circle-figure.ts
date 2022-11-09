class FigureParams {
  r: number = 1;
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

  const calcArea = (r: number) => {
    return 3.14 * r * r;
  };

  const result: number = calcArea(bodyValue.r);

  response.body = { result };
};

export default {
  calcArea,
};
