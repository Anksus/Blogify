# API docs

## For local development

> ### **For competitive programming**
>
> Base URL (**only GET request**) ` http://localhost:8000/cp`
>
> **There are currently 4 routes.**
>
> - To get all the topics and subtopics
>   `http://localhost:8000/cp/topics`
> - To get coresponding subtopics
>   `http://localhost:8000/cp/subtopics/topic`
>
>   **example**
>
> | Method / Link                                       |              Return value               |
> | --------------------------------------------------- | :-------------------------------------: |
> | GET / `http://localhost:8000/cp/subtopics/Geometry` | all subtopics of Geometry topic in JSON |
>
> - To get all Article names from topic and subtopic `http://localhost:8000/cp/articles/topic/subtopic`
>
>   **example**
>
> | Method / Link                                             |         Return value         |
> | --------------------------------------------------------- | :--------------------------: |
> | GET / `http://localhost:8000/cp/articles/Geometry/vector` | name of the articles in JSON |
>
> - TO GET HTML OF THE ARTICLE `http://localhost:8000/cp/article/name`
>
>   **example**
>
> | Method / Link                                   |       Return value       |
> | ----------------------------------------------- | :----------------------: |
> | GET / `http://localhost:8000/cp/article/euclid` | HTML of searched article |
