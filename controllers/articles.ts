export const getArticles = (context: any) => {
  context.response.body = List;
};

let List: any[] = [
  { id: 546, name: "Article 1" },
  { id: 894, name: "Article 2" },
  { id: 326, name: "Article 3" },
];
