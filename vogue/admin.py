from django.contrib import admin
from .models import Competition, Role, Team, Member_Detail

admin.site.register(Competition)
admin.site.register(Role)
admin.site.register(Team)
admin.site.register(Member_Detail)