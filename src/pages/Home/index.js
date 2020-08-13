import React, {useEffect, useState} from 'react';
import PageTemplate from '../../components/PageTemplate'
//import initialData from '../../data/initial_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories'

function Home() {

  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllwithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageTemplate paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
        {/* <BannerMain
          videoTitle={initialData.category[0].videos[0].title}
          url={initialData.category[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
        />

        <Carousel
          ignoreFirstVideo
          category={initialData.category[0]}
        />

        <Carousel
          category={initialData.category[1]}
        />

        <Carousel
          category={initialData.category[2]}
        />      

        <Carousel
          category={initialData.category[3]}
        />      

        <Carousel
          category={initialData.category[4]}
        />      

        <Carousel
          category={initialData.category[5]}
        />       */}

    </PageTemplate>
  );
}

export default Home;