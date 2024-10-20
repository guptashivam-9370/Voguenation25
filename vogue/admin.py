from django.contrib import admin
from .models import Team, TeamMember

class TeamMemberInline(admin.TabularInline):
    model = TeamMember
    extra = 1