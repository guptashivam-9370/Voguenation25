from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=100)
    team_leader_name = models.CharField(max_length=100)
    team_leader_email = models.EmailField()

class TeamMember(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members')
    member_name = models.CharField(max_length=100)
    member_email = models.EmailField()