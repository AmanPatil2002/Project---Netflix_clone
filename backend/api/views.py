from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


@api_view(['GET'])
def search_movies(request):
    query = request.GET.get('q', '')
    if query:
        movies = Movie.objects.filter(title__icontains=query)
    else:
        movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def register(request):
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')

    if User.objects.filter(username=email).exists():
        return Response({'message': 'Email already registered'}, status=400)

    user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'message': 'Registration successful'})


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(username=email, password=password)
    if not user:
        return Response({'message': 'Invalid credentials'}, status=400)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'message': 'Login successful'})

@api_view(['GET'])
def movie_list(request):
    movies = Movie.objects.all().order_by('-release_year')
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def movie_detail(request, pk):
    try:
        movie = Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response({'detail': 'Not found'}, status=404)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)
