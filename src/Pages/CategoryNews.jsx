import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const allData = data.data || data;
    if (id === "0") {
      return setCategoryNews(allData);
    } else if (id == 1) {
      const filtedNews = allData.filter((n) => n.others.is_today_pick == true);
      setCategoryNews(filtedNews);
    } else {
      const filtedNews = allData.filter((n) => n.category_id == id);
      setCategoryNews(filtedNews);
    }
  }, [data, id]);
  console.log(categoryNews);
  return (
    <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-xl text-red-500">({categoryNews.length})</span> News Found
      </h2>
      <div className='grid grid-cols-1 gap-4 '>
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
