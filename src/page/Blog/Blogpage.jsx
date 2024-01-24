import Blogpost from '../../component/Blogpost/Blogpost';

const Blogpage = () => {
    return (
        <div className='flex items-center flex-col mt-[80px]'>
            <div className='lg:text-[48px] text-[20px]  md:text-[26px]'>
                All Blog Post
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-9 lg:grid-cols-3'>
                {
                    blog.map((blog, idx) => <Blogpost key={idx} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogpage;
const blog = [
    {
        "_id": "1",
        "thumbnail": "https://example.com/image1.jpg",
        "title": "Introduction to React Hooks",
        "description": "Learn the basics of React Hooks and how to use them in your projects.",
        "userId": "user1",
        "userProfile": "https://example.com/user1.jpg",
        "userName": "John Doe",
        "createdAt": "2023-01-01T12:00:00.000Z",
        "likeCount": 15,
        "liked": ["user2", "user3"],
        "bookmark": [
            { "userId": "user2", "blogId": "1" },
            { "userId": "user3", "blogId": "1" }
        ]
    },
    {
        "_id": "2",
        "thumbnail": "https://example.com/image2.jpg",
        "title": "Mastering Tailwind CSS",
        "description": "Explore advanced techniques and best practices for using Tailwind CSS in your projects.",
        "userId": "user2",
        "userProfile": "https://example.com/user2.jpg",
        "userName": "Jane Doe",
        "createdAt": "2023-02-01T14:30:00.000Z",
        "likeCount": 8,
        "liked": ["user1"],
        "bookmark": []
    },
    {
        "_id": "3",
        "thumbnail": "https://example.com/image3.jpg",
        "title": "Building Responsive Web Apps with React",
        "description": "Discover how to create responsive web applications using React and modern design principles.",
        "userId": "user3",
        "userProfile": "https://example.com/user3.jpg",
        "userName": "Alice Johnson",
        "createdAt": "2023-03-15T10:45:00.000Z",
        "likeCount": 20,
        "liked": ["user1", "user2"],
        "bookmark": []
    },
    {
        "_id": "4",
        "thumbnail": "https://example.com/image4.jpg",
        "title": "Node.js Fundamentals",
        "description": "Get started with Node.js and build scalable and efficient server-side applications.",
        "userId": "user4",
        "userProfile": "https://example.com/user4.jpg",
        "userName": "Bob Smith",
        "createdAt": "2023-04-20T08:15:00.000Z",
        "likeCount": 12,
        "liked": ["user3"],
        "bookmark": []
    },
    {
        "_id": "5",
        "thumbnail": "https://example.com/image5.jpg",
        "title": "JavaScript ES6 Features",
        "description": "Explore the new features introduced in ECMAScript 2015 (ES6) and enhance your JavaScript skills.",
        "userId": "user5",
        "userProfile": "https://example.com/user5.jpg",
        "userName": "Eva Williams",
        "createdAt": "2023-05-10T16:20:00.000Z",
        "likeCount": 18,
        "liked": ["user1", "user4"],
        "bookmark": []
    },
    {
        "_id": "6",
        "thumbnail": "https://example.com/image6.jpg",
        "title": "Vue.js Essentials",
        "description": "Learn the fundamentals of Vue.js and build interactive user interfaces with ease.",
        "userId": "user6",
        "userProfile": "https://example.com/user6.jpg",
        "userName": "Charlie Brown",
        "createdAt": "2023-06-05T13:30:00.000Z",
        "likeCount": 25,
        "liked": ["user2", "user5"],
        "bookmark": []
    },
    {
        "_id": "7",
        "thumbnail": "https://example.com/image7.jpg",
        "title": "Python Django Crash Course",
        "description": "A quick and comprehensive guide to getting started with Django for web development using Python.",
        "userId": "user7",
        "userProfile": "https://example.com/user7.jpg",
        "userName": "David Miller",
        "createdAt": "2023-07-12T09:10:00.000Z",
        "likeCount": 14,
        "liked": ["user3", "user6"],
        "bookmark": []
    },
    {
        "_id": "8",
        "thumbnail": "https://example.com/image8.jpg",
        "title": "GraphQL in Action",
        "description": "Explore the benefits of using GraphQL for building efficient and flexible APIs.",
        "userId": "user8",
        "userProfile": "https://example.com/user8.jpg",
        "userName": "Grace Turner",
        "createdAt": "2023-08-25T11:45:00.000Z",
        "likeCount": 22,
        "liked": ["user1", "user4"],
        "bookmark": []
    }
]