# Generated by Django 4.2.2 on 2023-12-25 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='prev_performance',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='member_detail',
            name='phone_number',
            field=models.CharField(max_length=20),
        ),
    ]
