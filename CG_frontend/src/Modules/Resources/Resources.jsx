import React, { useState } from 'react';
import {
    Search, BookOpen, FileText, Download, Filter, Moon, Sun, Calendar,
    Clock, Star, Video, List, Table, X, Play, Pause, ChevronDown,
    BookmarkPlus, CheckCircle, BarChart, MessageSquare, Settings,
    GraduationCap
} from 'lucide-react';

// Import shadcn components
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Resources = () => {
    // Constants
    const contentTypes = ['all', 'video', 'document', 'table'];
    const subjects = ['all', 'mathematics', 'science', 'history', 'literature', 'computer science'];

    // State
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [showFavorites, setShowFavorites] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const [showNotification, setShowNotification] = useState(true);
    const [viewMode, setViewMode] = useState('grid');

    // Sample data
    const resources = [
        {
            id: 1,
            title: "Introduction to Calculus",
            subject: "Mathematics",
            type: "Notes",
            contentType: "document",
            uploadedBy: "Dr. Smith",
            uploadDate: "2025-02-20",
            fileSize: "2.4 MB",
            description: "Comprehensive introduction to differential calculus and its applications.",
            isFavorite: true,
            dueDate: "2025-03-01",
            tags: ["Calculus", "Mathematics", "Chapter 1"],
            completion: 75,
            comments: 12,
            views: 245,
            authorAvatar: "/api/placeholder/32/32"
        },
        {
            id: 2,
            title: "Physics Lab Demonstration",
            subject: "Science",
            type: "Video",
            contentType: "video",
            uploadedBy: "Prof. Johnson",
            uploadDate: "2025-02-19",
            fileSize: "156 MB",
            description: "Video demonstration of key physics experiments covering Newton's laws.",
            isFavorite: false,
            dueDate: "2025-02-28",
            tags: ["Physics", "Lab Work", "Newton's Laws"],
            completion: 30,
            comments: 8,
            views: 189,
            authorAvatar: "/api/placeholder/32/32",
            thumbnail: "/api/placeholder/640/360"
        }
    ];

    // Filter and sort resources
    const filteredResources = resources
        .filter(resource => {
            const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSubject = selectedSubject === 'all' || resource.subject.toLowerCase() === selectedSubject;
            const matchesType = activeTab === 'all' || resource.contentType === activeTab;
            const matchesFavorites = !showFavorites || resource.isFavorite;

            return matchesSearch && matchesSubject && matchesType && matchesFavorites;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'date':
                    return new Date(b.uploadDate) - new Date(a.uploadDate);
                case 'name':
                    return a.title.localeCompare(b.title);
                case 'popularity':
                    return b.views - a.views;
                default:
                    return 0;
            }
        });

    return (
        <div className={`min-h-screen p-6 w-full ml-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <div>
                        <h1 className="text-3xl font-bold">Learning Portal</h1>
                        <p className="text-gray-500">Your personalized learning hub</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Avatar>
                                    <AvatarImage src="/api/placeholder/32/32" alt="User" />
                                    <AvatarFallback>US</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Sign Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Notification */}
            {showNotification && (
                <Alert className="mb-6">
                    <AlertDescription className="flex items-center justify-between">
                        <span>Welcome back! You have 3 new resources available.</span>
                        <Button variant="ghost" size="sm" onClick={() => setShowNotification(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </AlertDescription>
                </Alert>
            )}

            {/* Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList>
                    {contentTypes.map(type => (
                        <TabsTrigger key={type} value={type} className="capitalize">
                            {type === 'video' && <Video className="mr-2 h-4 w-4" />}
                            {type === 'document' && <FileText className="mr-2 h-4 w-4" />}
                            {type === 'table' && <Table className="mr-2 h-4 w-4" />}
                            {type === 'all' && <List className="mr-2 h-4 w-4" />}
                            {type}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search resources..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <Filter className="mr-2 h-4 w-4" />
                                Filter
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {subjects.map(subject => (
                                <DropdownMenuItem
                                    key={subject}
                                    onClick={() => setSelectedSubject(subject)}
                                    className="capitalize"
                                >
                                    {subject}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        variant={showFavorites ? "secondary" : "outline"}
                        onClick={() => setShowFavorites(!showFavorites)}
                    >
                        <Star className={`mr-2 h-4 w-4 ${showFavorites ? "text-yellow-400" : ""}`} />
                        Favorites
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    >
                        {viewMode === 'grid' ?
                            <Table className="h-4 w-4" /> :
                            <List className="h-4 w-4" />
                        }
                    </Button>
                </div>
            </div>

            {/* Resources Grid */}
            <div className={`grid gap-4 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''}`}>
                {filteredResources.map(resource => (
                    <Card key={resource.id}>
                        <CardContent className="p-4">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    {resource.contentType === "video" ? (
                                        <Video className="h-6 w-6 text-primary" />
                                    ) : (
                                        <FileText className="h-6 w-6 text-primary" />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <h3 className="font-semibold hover:underline cursor-pointer">
                                                {resource.title}
                                            </h3>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-80">
                                            <div className="space-y-2">
                                                <p className="text-sm">{resource.description}</p>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    <span className="text-sm">Due: {resource.dueDate}</span>
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>

                                    <div className="mt-2 flex gap-2">
                                        {resource.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="mt-4">
                                        <Progress value={resource.completion} className="h-2" />
                                        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                                            <span>{resource.completion}% Complete</span>
                                            <div className="flex items-center gap-4">
                                                <span>{resource.views} views</span>
                                                <span>{resource.comments} comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Resource Dialog */}
            <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{selectedResource?.title}</DialogTitle>
                        <DialogDescription>{selectedResource?.description}</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Resources;