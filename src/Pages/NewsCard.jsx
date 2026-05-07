
import { FaStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router';


const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  // eslint-disable-next-line no-unused-vars
  const hasHalfStar = rating % 1 !== 0; // Check for decimal part

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="text-warning" />);
  }


  return stars;
};

const NewsCard = ({ news }) => {
  const { id, author, title, image_url, details, rating, total_view } = news;

  const formatDate = new Date(author.published_date).toLocaleDateString();
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      {/* Header */}
      <div className="card-body pb-0 bg-base-200">
        <div className="flex items-center gap-3 mb-4">
          {/* Author Avatar */}
          <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
              <img src={author?.img} alt={author?.name || 'Author'} />
            </div>
          </div>
          {/* Author Info */}
          <div className="flex-1">
            <p className="font-bold text-lg text-gray-800">{author?.name || 'Unknown Author'}</p>
            {/* <p className="text-xs text-gray-500">{author?.published_date ? formatDate(author.published_date) : 'No Date'}</p> */}
            <p className="text-base text-gray-500">{formatDate}</p>
          </div>
          {/* Action Icons (Optional based on image) */}
          <div className="flex items-center gap-2 text-gray-500">
            <button className="hover:text-primary">
              <FaBookmark />
            </button>
            <button className="hover:text-primary">
              <FaShareAlt />
            </button>
          </div>
        </div>
      </div>

      <div className="card-body py-3">
        {/* Title */}
        <h2 className="card-title text-xl font-bold leading-snug">{title}</h2>
      </div>

      {/* Main Image */}
      <figure className="px-6 pt-4">
        {' '}
        {/* Added padding around image */}
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full h-auto object-cover" // Ensure image responsiveness
        />
      </figure>

      {/* Details Snippet */}
      <div className="card-body pt-4">
        <p className="text-lg text-gray-600 line-clamp-5 text-justify">{details}</p>
        <Link to={`/news-details/${id}`} className="text-primary font-semibold text-lg hover:underline mt-2">
          Read More
        </Link>

        {/* Footer: Rating and Views */}
        <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            {renderStars(rating?.number || 0)}
            <span className="text-sm font-medium text-gray-600 ml-1">{rating?.number || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <FaEye />
            <span>{total_view ? (total_view >= 1000 ? `${(total_view / 1000).toFixed(0)}k` : total_view) : 0}</span>{' '}
            {/* View Number Formation*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;