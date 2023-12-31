# Generated by Django 5.0 on 2023-12-21 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_store', '0002_alter_book_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='author',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='book',
            name='is_bestseller',
            field=models.BooleanField(default=False),
        ),
    ]
