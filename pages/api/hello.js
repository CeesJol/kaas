// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: "1da80986-1925-58cf-b048-7ccd04a6f6e8",
      callType: {
        id: "1da80986-1925-58cf-b048-7ccd04a6f6e8",
        name: "Storing",
      },
      completedDate: "2020-07-14T16:52:00.000+0000",
      targetDate: "2020-07-14T16:52:00.000+0000",
      entryType: {
        name: "Telefonish",
      },
    },
  ]);
};
