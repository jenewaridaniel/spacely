import React from "react";
import { motion } from "framer-motion";

const PhotoAlbum = () => {
  const photos = [
    {
      id: 1,
      url: "https://www.buildinginteriorsgroup.co.uk/app/uploads/2022/10/Picture-1-2.png",
      width: 300,
      height: 400,
    },
    {
      id: 2,
      url: "https://archipreneur.com/wp-content/uploads/2018/12/Perspektiv_FunTasty_BoysPlayNice_15-812x910.jpg",
      width: 400,
      height: 300,
    },
    {
      id: 3,
      url: "https://archipreneur.com/wp-content/uploads/2018/12/Perspektiv_FunTasty_BoysPlayNice_16-874x910.jpg",
      width: 300,
      height: 500,
    },
    {
      id: 4,
      url: "https://imageio.forbes.com/specials-images/imageserve/6662026c180ecf674cd97541//960x0.jpg?height=473&width=711&fit=bounds",
      width: 500,
      height: 300,
    },
    {
      id: 5,
      url: "https://officesnapshots.com/wp-content/uploads/2016/04/foodtech-hub-office-design-8-700x467.jpg",
      width: 400,
      height: 600,
    },
    {
      id: 6,
      url: "https://i.shgcdn.com/4f3d49d3-a84a-4e48-b173-0f1a848a2a89/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      width: 600,
      height: 400,
    },
    {
      id: 7,
      url: "https://image.cnbcfm.com/api/v1/image/103452051-GettyImages-536986013.jpg?v=1529470896",
      width: 300,
      height: 300,
    },
    {
      id: 8,
      url: "https://www.shutterstock.com/image-photo/cheerful-young-black-man-manager-600nw-2510693647.jpg",
      width: 500,
      height: 500,
    },
    {
      id: 9,
      url: "https://plantbasednews.org/app/uploads/2024/05/plant-based-news-black-bean-recipes-FEATURED.jpg",
      width: 400,
      height: 400,
    },
    {
      id: 10,
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ce11579b-fb44-46cf-8528-682e60b61bc8.__CR0,0,800,600_PT0_SX600_V1___.jpg",
      width: 300,
      height: 600,
    },
  ];

  // Horizontal layout - organize into rows based on aspect ratios
  const organizeIntoRows = () => {
    const rows = [];
    let currentRow = [];
    let currentRowWidth = 0;
    const maxRowWidth = 1200; // Target row width

    photos.forEach((photo) => {
      const aspectRatio = photo.width / photo.height;
      const normalizedWidth = aspectRatio * 250; // Normalize height to 250px

      if (
        currentRowWidth + normalizedWidth > maxRowWidth &&
        currentRow.length > 0
      ) {
        rows.push([...currentRow]);
        currentRow = [photo];
        currentRowWidth = normalizedWidth;
      } else {
        currentRow.push(photo);
        currentRowWidth += normalizedWidth;
      }
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };

  const rows = organizeIntoRows();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="relative">
        {/* Top and bottom shadows for scroll indication */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        <div className="space-y-4">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
              className="flex gap-4 overflow-x-auto pb-2 scrollbar-none"
              style={{ minHeight: "200px" }}
            >
              {row.map((photo) => {
                const aspectRatio = photo.width / photo.height;
                const calculatedWidth = aspectRatio * 250; // Base height of 250px

                return (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 10,
                      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
                    }}
                    className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                    style={{
                      width: `${Math.max(calculatedWidth, 200)}px`,
                      height: "250px",
                    }}
                  >
                    <img
                      src={photo.url}
                      alt={`Workspace ${photo.id}`}
                      className="w-full h-full object-cover transition-all duration-300 hover:brightness-95"
                      loading="lazy"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4"
                    >
                      <div className="text-white"></div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: 2, delay: 1 }}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm">Scroll →</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhotoAlbum;
