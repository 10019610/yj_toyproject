import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <div className="list-bg">
        <div>
          <Link href="/write">글쓰러가자</Link>
        </div>
        {result.map((item, index) => (
          <div className="list-item" key={index}>
            <Link href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <DetailLink></DetailLink>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
