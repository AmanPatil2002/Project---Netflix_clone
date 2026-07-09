from django.db import models

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='thumbnails/')
    video_url = models.URLField()
    category = models.CharField(max_length=100, default='General')
    release_year = models.IntegerField(default=2025)

    def __str__(self):
        return self.title
