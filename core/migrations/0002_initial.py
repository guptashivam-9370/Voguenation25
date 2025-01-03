# Generated by Django 4.2.5 on 2023-12-14 13:27

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Competition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('competition_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team_name', models.CharField(max_length=255)),
                ('competition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.competition')),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_role', models.CharField(max_length=255)),
                ('min_member', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('max_member', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('competitions', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.competition')),
            ],
        ),
        migrations.CreateModel(
            name='Member_Detail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.IntegerField(validators=[django.core.validators.MinValueValidator(limit_value=10)])),
                ('your_city', models.CharField(max_length=255)),
                ('gender', models.CharField(choices=[('f', 'Female'), ('m', 'Male'), ('o', 'Others')], max_length=1)),
                ('Postal_code', models.IntegerField(blank=True, null=True)),
                ('is_leader', models.BooleanField(default=False)),
                ('competition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.competition')),
                ('role', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.role')),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.team')),
            ],
        ),
    ]
