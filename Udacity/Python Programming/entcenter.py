import media
import fresh_tomatoes

toy_story = media.Movie("Toy Story", "A story of a boy and his toys that come to life",
                        "http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                        "https://www.youtube.com/watch?v=vwyZH85NQC4")
#print(toy_story.storyline)

Iron_Man = media.Movie("Iron Man", "After being held captive in an Afghan cave, an industrialist creates a unique weaponized suit of armor to fight evil.",
                       "https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG",
                       "https://www.youtube.com/watch?v=LWbjrFCecPY")

#Iron_Man.show_trailer()

movies = [toy_story, Iron_Man]
fresh_tomatoes.open_movies_page(movies)
