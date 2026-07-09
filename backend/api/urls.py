from django.urls import path
from . import views


urlpatterns = [
    path('movies/', views.movie_list, name='movie-list'),
    path('register/',views.register),
    path('login/', views.login),
    path('movies/search/', views.search_movies, name='search_movies'),
    path('movies/<int:pk>/', views.movie_detail, name='movie-detail'),
    
]