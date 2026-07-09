from django.contrib import admin
from .models import Movie

# Register your models here.
@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    movie_list = ('title', 'release_year','category')
#It registers my Movie model in Django’s admin site so we can manage movies easily from the admin panel.
